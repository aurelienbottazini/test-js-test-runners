
import sum1779 from '../sum1779.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 99 + 17 to equal 116 + offset 0.23719166881181086', (t) => {
  assert.strictEqual(sum1779(99, 17), 116 + 0.23719166881181086);
});
