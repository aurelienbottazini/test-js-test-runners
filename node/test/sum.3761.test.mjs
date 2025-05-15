
import sum3761 from '../sum3761.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 98 + 16 to equal 114 + offset 0.12645530125022708', (t) => {
  assert.strictEqual(sum3761(98, 16), 114 + 0.12645530125022708);
});
