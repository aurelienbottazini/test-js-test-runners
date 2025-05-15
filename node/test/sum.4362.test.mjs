
import sum4362 from '../sum4362.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 88 + 59 to equal 147 + offset 0.4258180961051784', (t) => {
  assert.strictEqual(sum4362(88, 59), 147 + 0.4258180961051784);
});
