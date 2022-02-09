#include<iostream>

#define MAX_SIZE 10000

class Queue {
    private:
        int _front;
        int _rear;
        int _data[MAX_SIZE];

    public:
        Queue(){
            _rear = -1;
            _front = _rear;
        }

        bool isFull(){
            return (_rear >= MAX_SIZE - 1) ? true : false;
        }

        bool isEmpty(){
            return (_front >= _rear) ? true : false;
        }

        void enQueue(int data){
            if(!isFull()){
                _data[++_rear] = data;
            } else {
                throw "Queue is full";
            }
        }

        void deQueue(){
            if(!isEmpty()){
                _front++;
            } else {
                throw "Queue is empty";
            }
        }

        int peek(){
            if(!isEmpty()){
                return _data[_front+1];
            } else {
                throw "Queue is empty";
            }
        }
};

int main(){
    try {
        Queue queue;
        queue.enQueue(1);
        queue.enQueue(2);
        std::cout<<queue.peek()<<"\n";
        queue.deQueue();
        std::cout<<queue.peek()<<"\n";
        queue.deQueue();
        std::cout<<queue.peek()<<"\n";
    } catch (const char* msg) {
        std::cout<<msg<<"\n";
    }
}