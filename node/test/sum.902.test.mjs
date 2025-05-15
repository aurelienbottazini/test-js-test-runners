
import sum902 from '../sum902.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 17 + 83 to equal 100 + offset 0.5223459596263927', (t) => {
  assert.strictEqual(sum902(17, 83), 100 + 0.5223459596263927);
});
