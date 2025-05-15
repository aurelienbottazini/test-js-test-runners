
import sum2637 from '../sum2637.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 17 + 83 to equal 100 + offset 0.19970891273939717', (t) => {
  assert.strictEqual(sum2637(17, 83), 100 + 0.19970891273939717);
});
