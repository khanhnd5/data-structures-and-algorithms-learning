#include<iostream>

#define SIZE 5

class CircularQueue {
    private:
        int _front;
        int _rear;
        int _data[SIZE];

    public:
        CircularQueue(){
            _rear = -1;
            _front = -1;
        }

        bool isFull(){
            if((_front == 0 && _rear == SIZE - 1) ||
                (_front == _rear + 1)) {
                return true; 
            } else {
                return false;
            }
        }

        bool isEmpty(){
            return _front == -1;
        }

        void enQueue(int data){
            if(!isFull()){
                if(_front == -1 && _rear == -1){
                    _front = 0;
                    _rear = 0;
                }
                else {
                    _rear = (_rear + 1) % SIZE;
                }
                _data[_rear] = data;
            } else {
                throw "Queue is full";
            }
        }

        void deQueue(){
            if(!isEmpty()){
                _front = (_front + 1) % SIZE;
                if((_rear + 1) % SIZE == _front){
                    _front = -1;
                    _rear = -1;
                }
            } else {
                throw "Queue is empty";
            }
        }

        int peek(){
            if(!isEmpty()){
                return _data[_front];
            } else {
                throw "Queue is empty";
            }
        }
};

int main(){
    try {
        CircularQueue circularQueue;
        circularQueue.enQueue(1);
        circularQueue.enQueue(2);
        circularQueue.enQueue(3);
        circularQueue.enQueue(4);
        circularQueue.enQueue(5);
        std::cout<<circularQueue.peek()<<"\n";
        circularQueue.deQueue();
        circularQueue.enQueue(6);
        std::cout<<circularQueue.peek()<<"\n";
        circularQueue.deQueue();
        std::cout<<circularQueue.peek()<<"\n";
        circularQueue.deQueue();
        std::cout<<circularQueue.peek()<<"\n";
        circularQueue.deQueue();
        std::cout<<circularQueue.peek()<<"\n";
        circularQueue.deQueue();
        std::cout<<circularQueue.peek()<<"\n";
        circularQueue.deQueue();
        std::cout<<circularQueue.peek()<<"\n";
    } catch (const char* msg) {
        std::cout<<msg<<"\n";
    }
}