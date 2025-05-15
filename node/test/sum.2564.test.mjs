
import sum2564 from '../sum2564.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 42 + 70 to equal 112 + offset 0.963264249034961', (t) => {
  assert.strictEqual(sum2564(42, 70), 112 + 0.963264249034961);
});
