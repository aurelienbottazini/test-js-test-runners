
import sum213 from '../sum213.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 25 + 82 to equal 107 + offset 0.10901779675406664', (t) => {
  assert.strictEqual(sum213(25, 82), 107 + 0.10901779675406664);
});
