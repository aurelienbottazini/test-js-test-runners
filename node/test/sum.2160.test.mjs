
import sum2160 from '../sum2160.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 90 + 80 to equal 170 + offset 0.822665568877866', (t) => {
  assert.strictEqual(sum2160(90, 80), 170 + 0.822665568877866);
});
