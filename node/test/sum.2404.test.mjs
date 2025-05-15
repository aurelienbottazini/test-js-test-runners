
import sum2404 from '../sum2404.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 24 + 1 to equal 25 + offset 0.8207061210486581', (t) => {
  assert.strictEqual(sum2404(24, 1), 25 + 0.8207061210486581);
});
