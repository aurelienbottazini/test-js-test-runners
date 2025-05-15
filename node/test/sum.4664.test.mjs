
import sum4664 from '../sum4664.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 19 + 62 to equal 81 + offset 0.3264630751511901', (t) => {
  assert.strictEqual(sum4664(19, 62), 81 + 0.3264630751511901);
});
