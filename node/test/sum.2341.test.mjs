
import sum2341 from '../sum2341.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 62 + 96 to equal 158 + offset 0.938394737459484', (t) => {
  assert.strictEqual(sum2341(62, 96), 158 + 0.938394737459484);
});
