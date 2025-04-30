constructor() payable {
    seller = payable(msg.sender);
    value = msg.value / 2;
    if (2 * value != msg.value)
        revert ValueNotEven();
}

/// Confirm the purchase as buyer.
/// Transaction has to include `2 * value` ether.
/// The ether will be locked until confirmReceived is called.
function confirmPurchase()
    external
    payable
    condition(msg.value == 2 * value)
    inState(State.Created)
{
    emit PurchaseConfirmed();
    buyer = payable(msg.sender);
    state = State.Locked;
}

/// This function refunds the seller, i.e.
/// pays back the locked funds of the seller. Seller will get 3*value
function refundSeller()
    external
    onlySeller
    inState(State.Release)
{
    emit SellerRefunded();
    state = State.Inactive;
    seller.transfer(3 * value);
}
