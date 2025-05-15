
import sum165 from '../sum165.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 35 + 46 to equal 81 + offset 0.223405731438984', (t) => {
  assert.strictEqual(sum165(35, 46), 81 + 0.223405731438984);
});
