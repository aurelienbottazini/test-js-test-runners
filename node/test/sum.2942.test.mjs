
import sum2942 from '../sum2942.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 40 + 94 to equal 134 + offset 0.0884292787695562', (t) => {
  assert.strictEqual(sum2942(40, 94), 134 + 0.0884292787695562);
});
