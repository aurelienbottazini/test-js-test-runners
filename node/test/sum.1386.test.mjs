
import sum1386 from '../sum1386.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 92 + 0 to equal 92 + offset 0.958216559454716', (t) => {
  assert.strictEqual(sum1386(92, 0), 92 + 0.958216559454716);
});
