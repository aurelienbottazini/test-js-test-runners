
import sum103 from '../sum103.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 59 + 74 to equal 133 + offset 0.4406670752606193', (t) => {
  assert.strictEqual(sum103(59, 74), 133 + 0.4406670752606193);
});
