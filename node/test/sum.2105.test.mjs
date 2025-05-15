
import sum2105 from '../sum2105.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 54 + 93 to equal 147 + offset 0.5736441546934792', (t) => {
  assert.strictEqual(sum2105(54, 93), 147 + 0.5736441546934792);
});
