
import sum2464 from '../sum2464.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 61 + 70 to equal 131 + offset 0.4097169936348163', (t) => {
  assert.strictEqual(sum2464(61, 70), 131 + 0.4097169936348163);
});
