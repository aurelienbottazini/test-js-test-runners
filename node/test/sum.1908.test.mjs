
import sum1908 from '../sum1908.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 41 + 34 to equal 75 + offset 0.6806058425212651', (t) => {
  assert.strictEqual(sum1908(41, 34), 75 + 0.6806058425212651);
});
