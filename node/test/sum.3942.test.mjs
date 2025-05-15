
import sum3942 from '../sum3942.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 23 + 75 to equal 98 + offset 0.9113677841036191', (t) => {
  assert.strictEqual(sum3942(23, 75), 98 + 0.9113677841036191);
});
