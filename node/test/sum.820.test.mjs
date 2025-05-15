
import sum820 from '../sum820.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 40 + 20 to equal 60 + offset 0.3774718333528828', (t) => {
  assert.strictEqual(sum820(40, 20), 60 + 0.3774718333528828);
});
