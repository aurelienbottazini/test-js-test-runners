
import sum2366 from '../sum2366.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 35 + 44 to equal 79 + offset 0.22650063881976934', (t) => {
  assert.strictEqual(sum2366(35, 44), 79 + 0.22650063881976934);
});
