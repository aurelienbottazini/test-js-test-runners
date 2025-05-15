
import sum2629 from '../sum2629.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 68 + 67 to equal 135 + offset 0.20034576284382577', (t) => {
  assert.strictEqual(sum2629(68, 67), 135 + 0.20034576284382577);
});
