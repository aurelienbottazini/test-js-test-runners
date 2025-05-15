
import sum3501 from '../sum3501.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 72 + 69 to equal 141 + offset 0.2508851641065972', (t) => {
  assert.strictEqual(sum3501(72, 69), 141 + 0.2508851641065972);
});
