
import sum2518 from '../sum2518.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 86 + 65 to equal 151 + offset 0.8108938581641885', (t) => {
  assert.strictEqual(sum2518(86, 65), 151 + 0.8108938581641885);
});
