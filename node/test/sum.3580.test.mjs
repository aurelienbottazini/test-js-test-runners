
import sum3580 from '../sum3580.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 99 + 91 to equal 190 + offset 0.7854032363389819', (t) => {
  assert.strictEqual(sum3580(99, 91), 190 + 0.7854032363389819);
});
