import { PlusOutlined } from '@ant-design/icons';
import { Table, Button, ConfigProvider } from 'antd';
import type { TableProps } from 'antd';

interface DataType {
  key: string;
  vechicleId: number;
  type: string;
  lock: 'Lock' | 'Unlock';
  currentSpeed: number;
  battery: number;
  status: 'PARKING' | 'MOVING' | 'IDLING' | 'TOWING';
  location: string;
  lastUpdated: string;
}

const App = () => (
  <div className='w-full h-full text-[#5A6D63]'>
    <h1 className='bg-[#7ADEAE] py-3 text-center font-medium text-xl '>
      Vehicle Management
    </h1>
    <div className='h-16 relative'>
      <ConfigProvider
        theme={{
          components: {
            Button: {
              colorPrimaryHover: `#85d4ae`,
              colorPrimaryActive: `#39a370`,
            },
          },
        }}
      >
        <Button
          type='primary'
          shape='round'
          icon={<PlusOutlined />}
          size='large'
          className='bg-[#7ADEAE] text-[#5A6D63] font-bold absolute bottom-1 right-2'
        >
          New Vehicle
        </Button>
      </ConfigProvider>
    </div>
    <div>
      <Table dataSource={dataSource} columns={columns} />;
    </div>
  </div>
);

export default App;

const dataSource: DataType[] = [
  {
    key: '1',
    vechicleId: 132456,
    type: 'Scooter',
    lock: 'Lock',
    currentSpeed: 0,
    battery: 100,
    status: 'PARKING',
    location: '3.142, 012',
    lastUpdated: '2019-07-02T09:00:00',
  },
  {
    key: '2',
    vechicleId: 987654,
    type: 'Scooter',
    lock: 'Unlock',
    currentSpeed: 5,
    battery: 75,
    status: 'MOVING',
    location: '2.125, 114',
    lastUpdated: '2019-07-02T10:00:00',
  },
  {
    key: '3',
    vechicleId: 569825,
    type: 'Scooter',
    lock: 'Unlock',
    currentSpeed: 0,
    battery: 50,
    status: 'IDLING',
    location: '4.125, 114',
    lastUpdated: '2019-07-02T10:00:00',
  },
  {
    key: '4',
    vechicleId: 125864,
    type: 'Scooter',
    lock: 'Lock',
    currentSpeed: 0,
    battery: 15,
    status: 'TOWING',
    location: '5.125, 114',
    lastUpdated: '2019-07-02T10:00:00',
  },
  {
    key: '5',
    vechicleId: 125864,
    type: 'Scooter',
    lock: 'Lock',
    currentSpeed: 0,
    battery: 0,
    status: 'TOWING',
    location: '5.125, 114',
    lastUpdated: '2019-07-02T10:00:00',
  },
];

const columns: TableProps<DataType>['columns'] = [
  {
    title: '',
    dataIndex: 'key',
    rowScope: 'row',
  },
  {
    title: 'Vehicle ID',
    dataIndex: 'vechicleId',
    sorter: (a, b) => a.vechicleId - b.vechicleId,
  },
  {
    title: 'Type',
    dataIndex: 'type',
    sorter: (a, b) => a.type.localeCompare(b.type),
  },
  {
    title: 'Lock/ Unlock',
    dataIndex: 'lock',
    sorter: (a, b) => a.lock.localeCompare(b.lock),
  },
  {
    title: 'Current Speed',
    dataIndex: 'currentSpeed',
    sorter: (a, b) => a.currentSpeed - b.currentSpeed,
  },
  {
    title: 'Battery level',
    dataIndex: 'battery',
    sorter: (a, b) => a.battery - b.battery,
  },
  {
    title: 'Status',
    dataIndex: 'status',
    sorter: (a, b) => a.status.localeCompare(b.status),
  },
  {
    title: 'Location',
    dataIndex: 'location',
    sorter: (a, b) => a.location.localeCompare(b.location),
  },
  {
    title: 'Last Updated',
    dataIndex: 'lastUpdated',
    sorter: (a, b) => a.lastUpdated.localeCompare(b.lastUpdated),
  },
];
