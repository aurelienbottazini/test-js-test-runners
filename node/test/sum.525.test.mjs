
import sum525 from '../sum525.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 98 + 10 to equal 108 + offset 0.32978173528010335', (t) => {
  assert.strictEqual(sum525(98, 10), 108 + 0.32978173528010335);
});
