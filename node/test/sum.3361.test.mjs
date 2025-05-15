
import sum3361 from '../sum3361.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 64 + 78 to equal 142 + offset 0.790224750278572', (t) => {
  assert.strictEqual(sum3361(64, 78), 142 + 0.790224750278572);
});
