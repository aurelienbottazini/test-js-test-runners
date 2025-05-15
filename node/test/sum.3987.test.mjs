
import sum3987 from '../sum3987.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 47 + 32 to equal 79 + offset 0.18137896356769423', (t) => {
  assert.strictEqual(sum3987(47, 32), 79 + 0.18137896356769423);
});
