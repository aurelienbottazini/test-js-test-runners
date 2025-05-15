
import sum3105 from '../sum3105.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 32 + 55 to equal 87 + offset 0.4572840523030658', (t) => {
  assert.strictEqual(sum3105(32, 55), 87 + 0.4572840523030658);
});
