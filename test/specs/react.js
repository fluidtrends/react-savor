import React from 'react'
import savor from '../..'
import {
    expect
} from 'chai'
import {
    shallow
} from 'enzyme'
import BasicComponent from '../assets/react/BasicComponent'

const TestText = (<h1>test</h1>)
const TestComponent = (<BasicComponent/> )

  describe("React Tests", () => {
    beforeEach(function(done) {
        done();
    });

    afterEach(function(done) {
        savor.reset();
        done();
    });

    it("should be able to mount a React component", function(done) {
        const wrapper = shallow(TestComponent)
        expect(wrapper.length).to.equal(1)
        expect(wrapper).to.contain(TestText)

        done()
    });
});
