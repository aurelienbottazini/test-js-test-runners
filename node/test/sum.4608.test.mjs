
import sum4608 from '../sum4608.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 2 + 30 to equal 32 + offset 0.6131772804697717', (t) => {
  assert.strictEqual(sum4608(2, 30), 32 + 0.6131772804697717);
});
