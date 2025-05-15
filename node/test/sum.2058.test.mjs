
import sum2058 from '../sum2058.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 77 + 84 to equal 161 + offset 0.13407149312409494', (t) => {
  assert.strictEqual(sum2058(77, 84), 161 + 0.13407149312409494);
});
