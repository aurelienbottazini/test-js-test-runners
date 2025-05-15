
import sum763 from '../sum763.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 97 + 44 to equal 141 + offset 0.8520377063518844', (t) => {
  assert.strictEqual(sum763(97, 44), 141 + 0.8520377063518844);
});
