
import sum2999 from '../sum2999.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 99 + 2 to equal 101 + offset 0.4062195565427973', (t) => {
  assert.strictEqual(sum2999(99, 2), 101 + 0.4062195565427973);
});
