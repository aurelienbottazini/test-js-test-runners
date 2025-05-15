
import sum2993 from '../sum2993.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 71 + 96 to equal 167 + offset 0.5371820669012193', (t) => {
  assert.strictEqual(sum2993(71, 96), 167 + 0.5371820669012193);
});
