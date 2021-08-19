<template>
    <div class="dataview">
        <a-row :gutter="16">
            <a-col  :span="12">
                <a-row :gutter="16">
                        <a-col :span="12">
                            <a-card>
                                <a-statistic
                                        title="交易涨幅"
                                        :value="11.28"
                                        :precision="2"
                                        suffix="%"
                                        :value-style="{ color: '#3f8600' }"
                                        style="margin-right: 50px"
                                >
                                    <template #prefix>
                                        <a-icon type="arrow-up" />
                                    </template>
                                </a-statistic>
                            </a-card>
                        </a-col>
                        <a-col :span="12">
                            <a-card>
                                <a-statistic
                                        title="失败涨幅"
                                        :value="9.3"
                                        :precision="2"
                                        suffix="%"
                                        class="demo-class"
                                        :value-style="{ color: '#cf1322' }"
                                >
                                    <template #prefix>
                                        <a-icon type="arrow-down" />
                                    </template>
                                </a-statistic>
                            </a-card>
                        </a-col>
                    </a-row>
            </a-col>
            <a-col :span="12">
                <a-col :span="12">
                    <a-card>
                        <a-statistic
                                title="交易涨幅"
                                :value="11.28"
                                :precision="2"
                                suffix="%"
                                :value-style="{ color: '#3f8600' }"
                                style="margin-right: 50px"
                        >
                            <template #prefix>
                                <a-icon type="arrow-up" />
                            </template>
                        </a-statistic>
                    </a-card>
                </a-col>
                <a-col :span="12">
                    <a-card>
                        <a-statistic
                                title="失败涨幅"
                                :value="9.3"
                                :precision="2"
                                suffix="%"
                                class="demo-class"
                                :value-style="{ color: '#cf1322' }"
                        >
                            <template #prefix>
                                <a-icon type="arrow-down" />
                            </template>
                        </a-statistic>
                    </a-card>
                </a-col>
            </a-col>
        </a-row>
        <div class="area_box">
            <a-table :data-source="data" :columns="columns">
            </a-table>
        </div>
    </div>
</template>

<script>
    const data = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
        },
        {
            key: '2',
            name: 'Joe Black',
            age: 42,
            address: 'London No. 1 Lake Park',
        },
        {
            key: '3',
            name: 'Jim Green',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
        },
        {
            key: '4',
            name: 'Jim Red',
            age: 32,
            address: 'London No. 2 Lake Park',
        },
    ];
    export default {
        name: "dataview",
        data() {
            return {
                data,
                columns: [
                    {
                        title: 'Name',
                        dataIndex: 'name',
                        key: 'name',
                        scopedSlots: {
                            filterDropdown: 'filterDropdown',
                            filterIcon: 'filterIcon',
                            customRender: 'customRender',
                        },
                        onFilter: (value, record) =>
                            record.name
                                .toString()
                                .toLowerCase()
                                .includes(value.toLowerCase()),
                        onFilterDropdownVisibleChange: visible => {
                            if (visible) {
                                setTimeout(() => {
                                    this.searchInput.focus();
                                }, 0);
                            }
                        },
                    },
                    {
                        title: 'Age',
                        dataIndex: 'age',
                        key: 'age',
                        scopedSlots: {
                            filterDropdown: 'filterDropdown',
                            filterIcon: 'filterIcon',
                            customRender: 'customRender',
                        },
                        onFilter: (value, record) =>
                            record.age
                                .toString()
                                .toLowerCase()
                                .includes(value.toLowerCase()),
                        onFilterDropdownVisibleChange: visible => {
                            if (visible) {
                                setTimeout(() => {
                                    this.searchInput.focus();
                                });
                            }
                        },
                    },
                    {
                        title: 'Address',
                        dataIndex: 'address',
                        key: 'address',
                        scopedSlots: {
                            filterDropdown: 'filterDropdown',
                            filterIcon: 'filterIcon',
                            customRender: 'customRender',
                        },
                        onFilter: (value, record) =>
                            record.address
                                .toString()
                                .toLowerCase()
                                .includes(value.toLowerCase()),
                        onFilterDropdownVisibleChange: visible => {
                            if (visible) {
                                setTimeout(() => {
                                    this.searchInput.focus();
                                });
                            }
                        },
                    },
                ],
            };
        },
    }
</script>

<style scoped>
    .area_box{
        margin-top: 20px;
    }
</style>