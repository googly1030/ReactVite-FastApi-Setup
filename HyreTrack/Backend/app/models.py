from pydantic import BaseModel

class Item(BaseModel):
    id: int
    name: str
    description: str = None
    price: float
    tax: float = None

class User(BaseModel):
    id: int
    username: str
    email: str
    full_name: str = None

class Order(BaseModel):
    id: int
    item_id: int
    user_id: int
    quantity: int
    total_price: float