
import sum2371 from '../sum2371.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 69 + 91 to equal 160 + offset 0.4791293295369685', (t) => {
  assert.strictEqual(sum2371(69, 91), 160 + 0.4791293295369685);
});
