
import sum2092 from '../sum2092.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 3 + 32 to equal 35 + offset 0.5689604035509788', (t) => {
  assert.strictEqual(sum2092(3, 32), 35 + 0.5689604035509788);
});
