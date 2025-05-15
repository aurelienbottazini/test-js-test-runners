
import sum1183 from '../sum1183.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 28 + 96 to equal 124 + offset 0.7653470619928371', (t) => {
  assert.strictEqual(sum1183(28, 96), 124 + 0.7653470619928371);
});
