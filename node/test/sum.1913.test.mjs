
import sum1913 from '../sum1913.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 92 + 86 to equal 178 + offset 0.09066631271619208', (t) => {
  assert.strictEqual(sum1913(92, 86), 178 + 0.09066631271619208);
});
