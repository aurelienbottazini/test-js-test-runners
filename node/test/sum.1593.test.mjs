
import sum1593 from '../sum1593.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 14 + 16 to equal 30 + offset 0.4250995382041505', (t) => {
  assert.strictEqual(sum1593(14, 16), 30 + 0.4250995382041505);
});
