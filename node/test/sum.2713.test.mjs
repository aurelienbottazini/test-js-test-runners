
import sum2713 from '../sum2713.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 42 + 72 to equal 114 + offset 0.5988945115750501', (t) => {
  assert.strictEqual(sum2713(42, 72), 114 + 0.5988945115750501);
});
