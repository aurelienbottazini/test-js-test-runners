
import sum3069 from '../sum3069.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 3 + 3 to equal 6 + offset 0.510505141385474', (t) => {
  assert.strictEqual(sum3069(3, 3), 6 + 0.510505141385474);
});
