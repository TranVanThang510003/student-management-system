import { Button, Form, Input } from 'antd'

const AddStudentForm = () => {
  return (
    <div className="flex flex-col">
      <div className="flex w-full justify-center mb-4 text-3xl font-semibold ">Create Student</div>

      <Form
        layout="vertical"
        // onFinish={onFinish}
        style={{ padding: '0px 20px' }}
      >
        <div className="grid grid-cols-2 gap-4">
          <Form.Item name="name" label="Student Name" rules={[{ required: true }]}>
            <Input/>
          </Form.Item>

          <Form.Item name="email" label="Email Address" rules={[{ required: true }]}>
            <Input/>
          </Form.Item>
          <Form.Item name="address" label="Address" rules={[{ required: true }]}>
            <Input/>
          </Form.Item>
          <Form.Item name="phone" label="Phone Number" rules={[{ required: true }]}>
            <Input/>
          </Form.Item>
          <Form.Item name="role" label="Role" rules={[{ required: true }]}>
            <Input/>
          </Form.Item>
        </div>

          <Form.Item>
            <div className="text-right">
              <Button type="primary" htmlType="submit" style={{fontSize:'20px', padding:'20px '}}>
                Create
              </Button>
            </div>
          </Form.Item>
      </Form>
    </div>
)
}

export default AddStudentForm;