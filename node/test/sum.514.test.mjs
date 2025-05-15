
import sum514 from '../sum514.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 73 + 69 to equal 142 + offset 0.40093498334115274', (t) => {
  assert.strictEqual(sum514(73, 69), 142 + 0.40093498334115274);
});
