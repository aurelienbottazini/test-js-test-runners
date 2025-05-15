
import sum2130 from '../sum2130.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 52 + 82 to equal 134 + offset 0.8659059459122501', (t) => {
  assert.strictEqual(sum2130(52, 82), 134 + 0.8659059459122501);
});
