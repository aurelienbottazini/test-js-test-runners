
import sum3145 from '../sum3145.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 75 + 15 to equal 90 + offset 0.37358936338717086', (t) => {
  assert.strictEqual(sum3145(75, 15), 90 + 0.37358936338717086);
});
