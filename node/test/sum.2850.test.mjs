
import sum2850 from '../sum2850.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 37 + 0 to equal 37 + offset 0.7244398416808369', (t) => {
  assert.strictEqual(sum2850(37, 0), 37 + 0.7244398416808369);
});
