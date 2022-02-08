#include<iostream>

#define MAX_SIZE 10000

class Stack {
    private:
        int _top;
        int _data[MAX_SIZE];
    public:
        Stack(){
            _top = -1;
        }

        bool isEmpty(){
            return (_top == -1) ? true : false; 
        }

        bool isFull(){
            if(_top >= MAX_SIZE - 1){
                return true;
            } else {
                return false;
            }
        }

        int size(){
            return _top + 1;
        }

        int peek(){
            if(!isEmpty()){
                return _data[_top];
            } else {
                throw "Peek: Stack is empty";
            }
        }

        void pop(){
            if(!isEmpty()){
                _top--;
            } else {
                std::cout<<"Pop: Stack is empty\n";
            }
        }

        void push(int data){
            if(!isFull()){
                _data[++_top] = data;
            } else {
                std::cout<<"Push: Stack is full\n";
            }
        }
};

int main(){
    try{
        Stack stack;
        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.push(4);
        stack.push(5);
        std::cout<<"Peek: "<<stack.peek()<<"\n";
        std::cout<<"Pop\n";
        stack.pop();
        std::cout<<"Peek: "<<stack.peek()<<"\n";
        std::cout<<"Pop\n";
        stack.pop();
        std::cout<<"Peek: "<<stack.peek()<<"\n";
        std::cout<<"Pop\n";
        stack.pop();
        std::cout<<"Peek: "<<stack.peek()<<"\n";
        std::cout<<"Pop\n";
        stack.pop();
        std::cout<<"Peek: "<<stack.peek()<<"\n";
        std::cout<<"Pop\n";
        stack.pop();
        std::cout<<stack.peek()<<"\n";
    } catch (const char* msg){
        std::cout<<msg<<"\n";
    }

    return 0;
}